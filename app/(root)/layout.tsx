
interface LayoutProps{
    children: React.ReactNode
}


const MainLayout = ({
    children
}: LayoutProps) => {
    return ( 
        <div>{children}|</div>
     );
}
 
export default MainLayout;