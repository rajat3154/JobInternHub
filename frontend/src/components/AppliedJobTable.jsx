import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  return (
    <div>
      <Table className="min-w-full bg-black text-white rounded-lg shadow-lg overflow-hidden">
        <TableCaption className="text-blue-500">
          A list of your applied jobs
        </TableCaption>
        <TableHeader className="bg-blue-600">
          <TableRow>
            <TableHead className="text-white py-3 px-4">Date</TableHead>
            <TableHead className="text-white py-3 px-4">Job Role</TableHead>
            <TableHead className="text-white py-3 px-4">Company</TableHead>
            <TableHead className="text-white py-3 px-4 text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-blue-700 transition-all duration-200">
            <TableCell className="py-3 px-4">2024-03-10</TableCell>
            <TableCell className="py-3 px-4">Frontend Developer</TableCell>
            <TableCell className="py-3 px-4">HP</TableCell>
            <TableCell className="py-3 px-4 text-right">
              <Badge className="bg-green-400 text-white py-1 px-3 rounded-full">
                ACCEPTED
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-blue-700 transition-all duration-200">
            <TableCell className="py-3 px-4">2024-03-05</TableCell>
            <TableCell className="py-3 px-4">Backend Engineer</TableCell>
            <TableCell className="py-3 px-4">Amazon</TableCell>
            <TableCell className="py-3 px-4 text-right">
              <Badge className="bg-gray-400 text-white py-1 px-3 rounded-full">
                PENDING
              </Badge>
            </TableCell>
          </TableRow>
          <TableRow className="hover:bg-blue-700 transition-all duration-200">
            <TableCell className="py-3 px-4">2024-02-28</TableCell>
            <TableCell className="py-3 px-4">UI/UX Designer</TableCell>
            <TableCell className="py-3 px-4">Panasonic</TableCell>
            <TableCell className="py-3 px-4 text-right">
              <Badge className="bg-red-400 text-white py-1 px-3 rounded-full">
                REJECTED
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
  