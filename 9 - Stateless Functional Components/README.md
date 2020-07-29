# Stateless Functional Components

In the code editor, take a look at ``GuineaPigs`` from the last lesson.

Notice that its instructions object only has one property: ``render()``.

When you separate a container component from a presentational component, the *presentational* component will always end up like this: one ``render()`` function, and no other properties.

If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using ``React.Component``, you can write it as a JavaScript function!

A component class written as a function is called a *stateless functional component*. Stateless functional components have some advantages over typical component classes. We’ll cover those advantages in this lesson.

Click on **Example.js** to see a stateless functional component in action.