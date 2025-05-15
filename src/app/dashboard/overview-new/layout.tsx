export default function OverviewLayout({
    children,
    table1,
    table2,
}: {
    children: React.ReactNode,
    table1: React.ReactNode,
    table2: React.ReactNode,
}) {
    return (
        <div>
            <div>{children}</div>
            <div className="flex items-center">
                <div>{table1}</div>
                <div>{table2}</div>
            </div>
        </div>
    );
}