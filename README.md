# StencilJS + Storybook Project with TypeScript

This project combines [StencilJS](https://stenciljs.com/) for building web components and [Storybook](https://storybook.js.org/) for documenting and testing those components. It uses TypeScript for type safety.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [Yarn](https://yarnpkg.com/) package manager installed. If not, you can install it using `npm install -g yarn`.

## Getting Started

Follow these steps to get the project up and running:

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd your-stencil-storybook-project
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Build the StencilJS components**:

   To compile and build the StencilJS components, use the following command:

   ```bash
   yarn build
   ```

4. **Start Storybook**:

   Start the Storybook development server:

   ```bash
   yarn storybook
   ```

   Storybook will run on [http://localhost:6006](http://localhost:6006) by default.

5. **Start StencilJS Development Server (Optional)**:

   If you want to run the StencilJS components in a development environment, you can do so using the StencilJS development server:

   ```bash
   yarn start
   ```

   Your StencilJS components will be available at [http://localhost:3333](http://localhost:3333) by default.

## Project Structure

Here's a brief overview of the project's directory structure:

- `/src`: Contains your StencilJS component source files.
- `/stories`: Contains Storybook stories for documenting your components.
- `/storybook`: Configuration files for Storybook.
- `/www`: The output directory for the StencilJS build.

## Writing Components

- Create your StencilJS components in the `/src/components` directory.
- Each component should have its own directory with a `.tsx` file for the component and a `.css` file for styling.
- Don't forget to export your component using `export`, e.g., `export const MyComponent`.

## Writing Stories

- Create Storybook stories for your components in the `/stories` directory.
- Use `.stories.tsx` files for writing stories.
- Refer to the [Storybook documentation](https://storybook.js.org/docs/react/get-started/introduction) for guidance on writing stories.

## Additional Commands

- `yarn test`: Run tests (if you've added tests to your components).
- `yarn lint`: Run linters to ensure code quality.

## Contributing

Feel free to contribute to this project by opening issues or pull requests.
