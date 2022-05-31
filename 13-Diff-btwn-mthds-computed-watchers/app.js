/*  METHODS VS COMPUTED PROPERTIES VS WATCHERS

 METHODS
 ===============

    - Derive data that should be used in a template or used with event binding OR data binding

    - Data Binding - Method is executed for every re-render cycle of the component

    - Methods are used primarily for event or data that really needs to be evaluated all the time 


COMPUTED PROPERTIES
 ===============

    - Use with data binding 

    - Are only re-evaluated if one of their used values changes

    - These methods are called only when the values that they depend on changes

    -Will not be re-evaluated if some other data changes

    -Use for data that depends on other data


 WATCHERS
 ===============

    -Not used directly in the template

    -Allows you to run any code in reaction to some changed data
     e.g. Send HTTP requests / Set timers / Save something in the local storage etc

     -Use for any non-data update you want to make

*/