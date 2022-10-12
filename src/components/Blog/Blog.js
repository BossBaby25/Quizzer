import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 grid gap-5 w-4/5 mx-auto bg-slate-300 rounded-xl py-20'>
            <h1 className='text-cyan-600 text-5xl text-center mb-10'>FAQ</h1>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-600 text-xl  text-primary-content peer-checked:bg-indigo-600 peer-checked:text-content">
                    How does context api works?
                </div>
                <div className="collapse-content text-content pt-4 ">
                    <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-600 text-xl  text-primary-content peer-checked:bg-indigo-600 peer-checked:text-content">
                    What is the purpose of react router?
                </div>
                <div className="collapse-content text-content pt-4 ">
                    <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                </div>
            </div>

            <div className="collapse collapse-arrow w-4/5 mx-auto rounded-xl">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-600 text-xl  text-primary-content peer-checked:bg-indigo-600 peer-checked:text-content">
                    What is useRef() used for?
                </div>
                <div className="collapse-content text-content pt-4 ">
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                
                There are 2 rules to remember about references:
                    <ul>
                        <li>1.The value of the reference is persisted (stays the same) between component re-renderings;</li>
                        <li>
                        2.Updating a reference doesn't trigger a component re-rendering.
                        </li>
                    </ul>
                    
                </div>
            </div>

        </div>
    );
};

export default Blog;