import React from 'react'

const Four = () => {
  return (
    <div>
        <section className="four-section">
  <div className="blueprint-panel">
    <div className="vertical-text">
      <h1>The Blueprint of Success</h1>
      <p>Here’s how we make success happen, step by step</p>
    </div>
    <div className="tab-1">
      <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-1"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-2"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            2
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-3"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            3
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-4"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            4
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-5"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            5
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane slide show active"
          id="pills-1"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabIndex={0}
        >
          <div className="tab-content-1">
            <h2>Strategic Planning and Vision</h2>
            <p>
              We begin by understanding your goals and crafting a clear,
              strategic plan that aligns with your vision. This allows us to
              chart a course for success with measurable milestones and
              long-term objectives.
            </p>
          </div>
        </div>
        <div
          className="tab-pane slide"
          id="pills-2"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabIndex={0}
        >
          <div className="tab-content-2">
            <h1>Innovation and Development</h1>
            <p>
              We begin by understanding your goals and crafting a clear,
              strategic plan that aligns with your vision. This allows us to
              chart a course for success with measurable milestones and
              long-term objectives.
            </p>
          </div>
        </div>
        <div
          className="tab-pane slide"
          id="pills-3"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <div className="tab-content-3">
            <h1>Effective Team Collaboration</h1>
            <p>
              Our team believes in the power of collaboration. We bring together
              experts from different fields, fostering a creative and efficient
              work environment. This ensures smooth communication and faster
              problem-solving.
            </p>
          </div>
        </div>
        <div
          className="tab-pane slide"
          id="pills-4"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <div className="tab-content-4">
            <h1>Data-Driven Decision Making</h1>
            <p>
              We rely on data to make informed decisions. By analyzing trends,
              customer behaviors, and performance metrics, we shape strategies
              that deliver results, ensuring we stay ahead in a competitive
              landscape.
            </p>
          </div>
        </div>
        <div
          className="tab-pane slide"
          id="pills-5"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabIndex={0}
        >
          <div className="tab-content-5">
            <h1>Scalable Execution and Delivery</h1>
            <p>
              Our approach ensures that every project we deliver can grow and
              evolve with your business. We focus on solutions that are
              flexible, adaptable, and scalable, so they continue to meet your
              needs as you expand.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Four
