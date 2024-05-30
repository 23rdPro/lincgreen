export default function Breadcrumb() {
  return (
    <div className="breadcrumbs">
      <div className="page-header d-flex align-items-center" style={{backgroundImage: "url('')" }}>
        <div className="container position-relative">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>Blog</h2>
              <p>Welcome to our blog page, LincGreen Initiative! Here, we share insights 
                and updates on our sustainable practices and green projects.</p>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="container">
          <ol>
            <li><a href="/">Home</a></li>
            <li>Blog</li>
          </ol>
        </div>
      </nav>
    </div>
  )
};