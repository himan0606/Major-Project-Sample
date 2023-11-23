import React from 'react'

const Contact = () => {
  return (
    <div><div><>
    {/* Hello world */}
    <div className="awesome" style={{ border: "1px solid red" }}>
      <label htmlFor="name">Enter your name: </label>
      <input type="text" id="name" />
    </div>
    <p>
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>Material Design for Bootstrap</title>
      {/* MDB icon */}
      <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
      />
      {/* Google Fonts Roboto */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
      />
      {/* MDB */}
      <link rel="stylesheet" href="css/mdb.min.css" />
      {/* Start your project here*/}
    </p>
    <div id="preview" className="preview">
      <div style={{ display: "none" }} />
      <div>
        <div
          data-draggable="true"
          className=""
          style={{ position: "relative" }}
          draggable="false"
        >
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="container pt-5"
            data-v-271253ee=""
          >
            <section className="mb-10">
              {" "}
              <h2 className="fw-bold mb-5 text-center">Contact us</h2>{" "}
              <div className="row gx-lg-5">
                {" "}
                <div className="col-lg-5 mb-4 mb-lg-0">
                  {" "}
                  <form>
                    {" "}
                    {/* Name input */}{" "}
                    <div className="form-outline mb-4">
                      {" "}
                      <input
                        type="text"
                        id="form4Example1"
                        className="form-control"
                      />{" "}
                      <label className="form-label" htmlFor="form4Example1">
                        Name
                      </label>{" "}
                    </div>{" "}
                    {/* Email input */}{" "}
                    <div className="form-outline mb-4">
                      {" "}
                      <input
                        type="email"
                        id="form4Example2"
                        className="form-control"
                      />{" "}
                      <label className="form-label" htmlFor="form4Example2">
                        Email address
                      </label>{" "}
                    </div>{" "}
                    {/* Message input */}{" "}
                    <div className="form-outline mb-4">
                      {" "}
                      <textarea
                        className="form-control"
                        id="form4Example3"
                        rows={4}
                        defaultValue={""}
                      />{" "}
                      <label className="form-label" htmlFor="form4Example3">
                        Message
                      </label>{" "}
                    </div>{" "}
                    {/* Checkbox */}{" "}
                    <div className="form-check d-flex justify-content-center mb-4">
                      {" "}
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        defaultValue=""
                        id="form4Example4"
                        defaultChecked=""
                      />{" "}
                      <label className="form-check-label" htmlFor="form4Example4">
                        Send me a copy of this message
                      </label>{" "}
                    </div>{" "}
                    {/* Submit button */}{" "}
                    <button
                      type="submit"
                      className="btn   btn-primary btn-block mb-4"
                      aria-controls="#picker-editor"
                    >
                      Send
                    </button>{" "}
                  </form>{" "}
                </div>{" "}
                <div className="col-lg-7 mb-4 mb-md-0">
                  {" "}
                  <div className="row gx-lg-5">
                    {" "}
                    <div className="col-md-6 mb-5">
                      {" "}
                      <div className="d-flex align-items-start">
                        {" "}
                        <div className="flex-shrink-0">
                          {" "}
                          <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                            {" "}
                            <i
                              className="fas fa-headset fa-lg text-white fa-fw"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="flex-grow-1 ms-4">
                          {" "}
                          <p className="fw-bold mb-1">Technical support</p>{" "}
                          <p className="text-muted mb-0">support@example.com</p>{" "}
                          <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-md-6 mb-5">
                      {" "}
                      <div className="d-flex align-items-start">
                        {" "}
                        <div className="flex-shrink-0">
                          {" "}
                          <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                            {" "}
                            <i
                              className="fas fa-dollar-sign fa-lg text-white fa-fw"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="flex-grow-1 ms-4">
                          {" "}
                          <p className="fw-bold mb-1">Sales questions</p>{" "}
                          <p className="text-muted mb-0">sales@example.com</p>{" "}
                          <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-md-6 mb-5">
                      {" "}
                      <div className="d-flex align-items-start">
                        {" "}
                        <div className="flex-shrink-0">
                          {" "}
                          <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                            {" "}
                            <i
                              className="fas fa-newspaper fa-lg text-white fa-fw"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="flex-grow-1 ms-4">
                          {" "}
                          <p className="fw-bold mb-1">Press</p>{" "}
                          <p className="text-muted mb-0">press@example.com</p>{" "}
                          <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <div className="col-md-6 mb-5">
                      {" "}
                      <div className="d-flex align-items-start">
                        {" "}
                        <div className="flex-shrink-0">
                          {" "}
                          <div className="p-3 bg-primary rounded-4 shadow-2-strong">
                            {" "}
                            <i
                              className="fas fa-bug fa-lg text-white fa-fw"
                              aria-controls="#picker-editor"
                            />{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="flex-grow-1 ms-4">
                          {" "}
                          <p className="fw-bold mb-1">Bug report</p>{" "}
                          <p className="text-muted mb-0">bugs@example.com</p>{" "}
                          <p className="text-muted mb-0">+1 234-567-89</p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </section>
          </section>
          {/**/}
        </div>
      </div>
    </div>
    {/* End your project here*/}
    {/* MDB */}
    {/* Custom scripts */}
    <p />
  </>
  </div></div>
  )
}

export default Contact