import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex space-x-2 text-sm text-gray-700">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={`breadcrumb-item ${
                            index === items.length - 1 ? 'active' : ''
                        }`}
                        aria-current={index === items.length - 1 ? 'page' : undefined}
                    >
                        {index === items.length - 1 ? (
                            item.label
                        ) : (
                            <Link href={item.href}>{item.label}</Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;