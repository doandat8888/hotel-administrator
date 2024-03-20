import { Select, SelectItem, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, getKeyValue } from "@nextui-org/react"
import consts from "../../consts"
import { useEffect, useState } from "react"
import PieChart from "../chart/PieChart";

const RevenueTable = () => {

    const [selectedProperty, setSelectedProperty] = useState<string>();
    const [revenueList, setRevenueList] = useState<IRevenue[]>(consts.reveunues);

    useEffect(() => {
        const totalRow = getTotalRow(revenueList);
        const updatedData: any = [...revenueList, totalRow];
        setRevenueList(updatedData);
    }, [])

    useEffect(() => {
        const revenueArr: IRevenue[] = [];
        if (selectedProperty !== "") {
            const selectedPropertyList = selectedProperty?.split(',');
            if (selectedPropertyList) {
                for (let i = 0; i < selectedPropertyList.length; i++) {
                    const revenueFilter: IRevenue | undefined = consts.reveunues.find((item) => item.property_id === parseInt(selectedPropertyList[i] ? selectedPropertyList[i] : ""));
                    if (revenueFilter) {
                        revenueArr.push(revenueFilter);
                    }
                };
                const totalRow = getTotalRow(revenueArr);
                const updatedData: any = [...revenueArr, totalRow];
                setRevenueList(updatedData);
            };
        } else {
            const totalRow = getTotalRow(consts.reveunues);
            const updatedData: any = [...consts.reveunues, totalRow];
            setRevenueList(updatedData);
        }

    }, [selectedProperty]);

    const getTotalRow = (arr: any[]) => {
        const totalRow = {
            id: -1,
            property_id: 'Grand total',
            total_room: arr.reduce((acc, curr) => acc + curr.total_room, 0),
            room_revenue: arr.reduce((acc, curr) => acc + curr.room_revenue, 0),
            f_and_b_revenue: arr.reduce((acc, curr) => acc + curr.f_and_b_revenue, 0),
            other_revenue: arr.reduce((acc, curr) => acc + curr.other_revenue, 0),
            total_revenue: arr.reduce((acc, curr) => acc + curr.total_revenue, 0)
        };
        return totalRow;
    }

    const getPropertyName = (propertyId: number) => {
        const property = consts.properties.find((prop) => prop.id === propertyId);
        return property ? property.property_code : '';
      };

    const columns = [
        {
            key: "property_id",
            label: "Property",
        },
        {
            key: "total_room",
            label: "Total Room In Hotel",
        },
        {
            key: "room_revenue",
            label: "Room Revenue",
        },
        {
            key: "f_and_b_revenue",
            label: "F&B Revenue",
        },
        {
            key: "other_revenue",
            label: "Other Revenue",
        },
        {
            key: "total_revenue",
            label: "Total Revenue",
        },
    ];

    return (
        <div className="w-full space-y-10">
            <Select
                selectionMode="multiple"
                color='default'
                label="Property"
                placeholder="Select property"
                onChange={(e) => setSelectedProperty(e.target.value)}
                className="lg:w-[50%] w-[100%] lg:max-w-[700px]"
            >
                {consts.properties.map((property) => (
                    <SelectItem key={property.id} value={property.id}>
                        {property.property_name}
                    </SelectItem>
                ))}
            </Select>
            <div className="flex items-center justify-center">
                <PieChart data={revenueList} />
            </div>
            <div className="mt-[600px]">
                <Table>
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={revenueList}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => columnKey === "property_id" && item.id !== -1 ? <TableCell>{getPropertyName(item.property_id)}</TableCell>  : <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default RevenueTable