# Introduction
This is a basic starter for building out webpack 3 + react applications.    

It makes a few assumptions:    
- You may be wanting to render the application out to more than one location on a page.
- You plan to release a copy of your application into production usage so the config is split out to allow for this.
- You are working in a team that may have or does have both Windows and MAC dev machines.
- You are planning to use the BEM naming convention for all classNames prefixing them with your project
- You prefer using Redux and Sagas for state management    
    
**Note:**    
- Stylelint was not included as it can be configured to work via a VS Code (and probably other editors) plugin

# Install
**Before continuing**, if you do not plan to use client-side routing, open up `package.json` and delete the react-router entry from the Dependencies list.

To install, just run `npm i` in a terminal / cmd prompt at the project root directory

# Usage
Change the class name in `build/index.html` so it matches up with the one being passed as the value in the `src/index.js` file where **findAndRenderToTarget** is being called.

Search and Replace the project BEM prefix **bemprefix** with the BEM prefix you want to use for your project.

# Application State Lifecycles
Below are textual diagrams to communicate the flow of application data within the context of a redux-saga application such as this project:    
    
**Synchronous Actions (standard updates to the store)**    
=> *inside connected component* Action is called (mapDispatchToProps)    
=> *component's reducer* Reducer has a case that matches the type associated with the Action that was called    
=> Reducer merges (spread operator) any updated action.values into a clone of the most recent version of the store    
=> Connected component listens for changes to any state that has been mapped to its props (mapStateToProps)    
=> render() is re-called on that component if anything has changed

---

**Async Actions (sagas usually calling some API or performing unknown duration to return functions)**    
=> *inside connected component* Action is called (mapDispatchToProps)    
=> *component's saga* Saga Watcher has a takeLatest that matches the type associated with the Action that was called    
=> Watcher runs the associated generator function (saga) to do the async task(s)    
=> Usually some data is processed and then a put() helper function is yielded to dispatch some Action    
=> Follows the Synchronous steps from this point    
