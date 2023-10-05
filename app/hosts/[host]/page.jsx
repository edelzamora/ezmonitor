import Bar from "@/components/Bar"
import {
  Table, TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Container from '@/components/ui/Container'
import { Button } from '@/components/ui/button'
import { MonitorDown } from 'lucide-react'

async function getDevices(host) {
  const res = await fetch('http://192.168.1.25:5000/hosts/' + host, {
    next: {
      revalidate: 30
    }
  })
  if (res.ok) {
    return res.json()
  }
  throw Error('Bad response')
}
export default async function DeviceDetails({ params }) {
  const devices = await getDevices(params.host)
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <Bar host={params.host} />
          <div>
            <Table>
              <TableCaption>A list of your {params.host} devices.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Status</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Mac Address</TableHead>
                  <TableHead>Hostname</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Online</TableCell>
                  <TableCell>192.168.1.255</TableCell>
                  <TableCell>00:AF:FF:FF:AB</TableCell>
                  <TableCell>Proxmox</TableCell>
                  <TableCell>
                    <MonitorDown />
                  </TableCell>
                </TableRow>
                {devices.data.map((item, i) => (
                  <TableRow>
                    <TableCell>Online</TableCell>
                    <TableCell>{item.ip}</TableCell>
                    <TableCell>{item.mac}</TableCell>
                    <TableCell>hostname {i + 1}</TableCell>
                    <TableCell><MonitorDown /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Button size='lg' >Click</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
