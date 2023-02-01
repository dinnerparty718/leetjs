# prep 2/1/2023

## gRPC - remote procedure call

for Backend Services
python - Java - Golang

http 2.0 vs http 1.1

- convenience
  - if not gRPC, difference httpClients
  - not worry about level of detail
  - code generation - protocal buffers - contract for communicatinos
  - REST -> json no schema
  - gRPC can define schema, optional vs required, object type
  - precedures to exposed
  - source code => expected languague
- performance
  - better than http 2.0
  - protocal buffer -> binaries, much smaller
  - json is not compressed or flat (key-value pairs) gZIP? not convinence

## Spot trading -> buy low and sell high

- instantly trading at spot
- spot markets: buyers/sellers/order book
- bid (buyer) max pirce a buyer is willing to buy
- ask (seller) min price a seller is willing to sell
- BitCoint Order book
  - ask side book
  - bid side book

## OTC trading -> off-exchange trading

- trades not managed by exchange, between two parties directly
- trades are facilited by broker-dealers
- drawbacks
  - no one is selling/buying
  - less transparency
  - couterparty risks
- pros
  - for someone who does not qualified for exachange to gain access (eg. walmart can do it)
  - keeping low profile. do not need to disclose the price
  - less regulatory redtape
  
## Jasmin -> Angular Testing libraries

## grunt the javascript task runner vs webpack

- with plugins
- minified css files
  
## Flux in React

- a seperate artchitecture
- is an arthitecture for unidirectional data flow
- Developed and initially used by facebook
- Cna be embedded to JS frameworks
- use Redux libary
- Elements
  - Actions - are sent to the dispatcher to trigger the data flow
  - Dispatcher - Central hub of the app, all the data is dispatched and send to the stores
  - Store - store is the place hwere the application state and logic are held
  - View - The view will recieve data from the store and render the app
- Advantages
  - debugging
  - better control
  - efficiency

## JS Event Loop

- [Visulized](https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62)
- JavsScript is single thread, can process things at the same time
- do not block the UI
  - when you call a function, js put the function into a call stack (last in first out)
  - db query => async -> offload to LIBUV API (node js)
  - LIBUV API add the result to  Event Queue (first in first out)
  - Event loop is constantly checking event queue, ask long as the call stack is empty,event loop will deque the event queue

## CSS layout

- float: complicated and error prone
  - Content blends to Content
  - only use case: wrap text around images
- flexbox
  - Layout bends to content
  - default is one row
  - good for 1D

  ```css
  .flexy {
    display: flex; /* flex-direction: row */
    flex-wrap: wrap; /* two rows okay now  default is nowrap*/
  }

  .flexy main {
    flex-basis: 100%; /* one row */
  }

  ```

- grid
  - Content bends to layout
  - good for 2 D layout

  ```css
  .grid-container {
    display: grid;
    grid-template-columns: 2fr 1fr; /*     grid-template-columns: repeat(4, 100px) */
    grid-template-rows: 200px 15px; /* first row , second row */
    grid-auto-rows: 150px; /* default for all,  minmax(150px, auto)        */
    grid-row-gap: 20px;
    grid-column-gap: 10px;
    grid-gap: 20px;

    grid-template-areas:
       "header header"
       "sidebar content"
       "sidebar content"
       ;  /* less common */
  }

  .grid-item-1 {
    grid-column-start: 1;
    grid-column-end: -1;
    grid-column: 1 / -1; 
    grid-column: span 2;
  }

  .grid-item-2 {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-row: span 2;
  }

  .grid-item-3 {
    grid-area: content;
  }


  /* all and () */
  /* all , ()   or  */

  /* print 
   top -> bottom
  */

  @media  (max-width: 500px) {
    body {
      color: blue;
    }
    
  }


  /* portrait */
  @media (orientaion: landscape) {
    .title {
      color: green;
    }
  }



  ```
