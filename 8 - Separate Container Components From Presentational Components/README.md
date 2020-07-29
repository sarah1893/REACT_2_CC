# Separate Container Components From Presentational Components: Apply

S*eparating container components from presentational components* is a popular React programming pattern.

Here’s the basic idea behind it: if a component has to have ``state``, make calculations based on ``props``, or manage any other complex logic, then that component shouldn’t also have to render HTML-like JSX.

Instead of rendering HTML-like JSX, the component should render another component. It should be *that* component’s job to render HTML-like JSX.

Following this pattern separates your *business logic* from your *presentational logic*, which is a Good Thing.