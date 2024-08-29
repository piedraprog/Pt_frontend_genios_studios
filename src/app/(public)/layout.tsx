interface IProps {
  children: React.ReactNode;
  title: string;
}


const PublicLayout: React.FC<IProps> = ({ children, title }) => {
  return (
    <>
      <title>{title}</title>
      {children}
    </>
  )
}

export default PublicLayout;