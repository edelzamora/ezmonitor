import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Table, TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
 } from '@/components/ui/table'
import Container from '@/components/ui/Container'
import { MonitorDown } from 'lucide-react'


export default function Home() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div>
            <Table>
              <TableCaption>A list of your Home Devices.</TableCaption>
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
                  <TableCell>192.168.1.50</TableCell>
                  <TableCell>00:AF:FF:FF:AB</TableCell>
                  <TableCell>Proxmox</TableCell>
                  <TableCell>
                    <MonitorDown/>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button size='lg'>Click</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
