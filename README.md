# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


About styled components: helps in writing css right in js components files, we take a regular html component and using styled function we create a new component with styles applied to it, we can you resue these, iinstead of rergular html component.

Lib:  npm i styled-components
----------------------------------------------------------------------------------------------------------------------------------------------
react query for remote state management 
features: 1 lot less code , better ux 

data is stored in cache, fetched data can be used by multiple components , preventing fetch request for each component 
this results in supre responsive ux.

it provides with automatic loading and error states 

it automatic  refetches to keep states in synced

prefetch data > pagination (data already there before we vist the page)
easy remote state mutation 
in offline state > data is still available for user , due to caching 

to install react query : npm i @tanstack/react-query@4

utilities: npm Date-fns ( contains tons of helper functions)


when the data is fresh the refetch does not happen , even if i change some value in the database , but after the staleTime time is passed , the data becomes stale  , so as soons as i go to another browser and then return ( you return to the component), the fresh data is fetched 

--------------------------------------------------------------------------------------------------------------------------------------------------
nicely formatted notifications using toast lib: npm i react-hot-toast

-------------------------------------------------------------------------

react hook form lib : for simplyfing handeling forms

