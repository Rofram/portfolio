import Header from './Header';


const Layout = ({ children }) => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
      <Header />
      {children}
    </div>
  )
}

export default Layout;