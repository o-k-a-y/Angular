# Angular
Angular Projects from https://www.udemy.com/course/the-complete-guide-to-angular-2

## Assignments
Directory containing assignments from the course to demonstrate understanding of different concepts.

## FirstApp
Literally the most basic Angular application with just the app component.

## BootstrapAndComponentExample
Example showing adding bootstrap.css to the styles in the configuration schema in angular.json.
Also shows a basic new Component.

## DatabindingAndDirectives
### Databinding: {{ stringInterpolation }}, [property]="binding", (event)="binding()" and [(two-way)]="binding".

If you want to output or print something, use **string interpolation**.
If you want to change some property (html element, directive, component), typically you will use **property binding**.
If you want an event to bind to a function, use event binding.

If you want both, use **two-way binding**. It's just syntactic sugar for combining property binding and event binding.

### Directives: Components, Structural directives, Attribute directives
**Components**: Directives with a template.
**Structural directives**: Change DOM layout by adding/removing elements. Examples are \*ngIf, \*ngFor.
**Attribute directives**: Change appearance or behavior of an element, component, or other directive. Examples are [ngStyle], [ngClass].


## ShoppingListWithRecipes
An actual small project using nested components to display a recipe list and shopping list with options to manage both.

## cmp-databinding-start
Databinding on custom Components.

@Input() decorator for databinding on properties/variables.
@Output() decorator for databinding on events.

## directives-start
Creating custom structural and attribute directives to attach on elements.

## routing-start
Create absolute and local routes.
Apply styling to elements based on the current route.
