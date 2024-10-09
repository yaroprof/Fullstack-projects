import React from 'react'

export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="texts">
          <h2>Does multi provider integration make sense for merchants and payment processors?</h2>
          <p className="info">
            <a className="author">Yaroslav Shevchuk</a>
            <time>2024-10-03 16:32 </time>
            <p className="summary">is simply dummy text of the printing and typesetting industry. </p>
          </p>
          <p>n today's fast-paced world, open multi-provider Payment Platform as a Service (PPaaS) companies are becoming increasingly popular, as they offer enterprises a simple and efficient way to accept payments with close to unlimited scaling of their business without adding additional staff (...just try to hire a fintec developer and let us know whenever you succeeded...).</p>
        </div>

      </div>

    </div>
  )
}
