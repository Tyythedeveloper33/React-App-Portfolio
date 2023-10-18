# React Portfolio

Welcome to my React-based portfolio! In this project, I have leveraged my React skills to create a dynamic and interactive portfolio that showcases my work as a web developer. This portfolio is designed not only to help me stand out in the developer community but also to provide employers and other developers with an easy way to assess my qualifications.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Projects](#projects)
- [Design](#design)
- [Grading Requirements](#grading-requirements)
- [Review](#review)

## User Story

As an employer looking for candidates with experience building single-page applications, I want to view a potential employee's deployed React portfolio of work samples. This will allow me to assess whether they are a good fit for an open position.

## Acceptance Criteria

My React portfolio adheres to the following acceptance criteria:

- When the portfolio is loaded, it presents a page containing a header, a section for content, and a footer.
- The header displays my name and navigation titles corresponding to different sections of the portfolio.
- Clicking on a navigation title displays the corresponding section below the navigation without a page reload, and the title is highlighted.
- When the portfolio is loaded for the first time, the "About Me" section and title are selected by default.
- The "About Me" section features a recent photo or avatar of me and a short bio.
- The "Portfolio" section displays titled images of six of my applications with links to both the deployed applications and their corresponding GitHub repositories.
- The "Contact" section includes a contact form with fields for name, email address, and a message. It provides notifications for empty fields and invalid email addresses.
- The "Resume" section provides a link to download my resume and a list of my proficiencies.
- The footer includes text or icon links to my GitHub and LinkedIn profiles, and a profile on a third platform (e.g., Stack Overflow, Twitter).

## Mock-Up

To get a visual sense of the web application's appearance and functionality, you can refer to this [demo animation](./Assets/20-react-homework-demo-01.gif). It showcases clicking through various sections and interacting with the Contact page.

## Getting Started

I have used `create-react-app` to build this portfolio, which includes the following components:

- A single `Header` component that appears on multiple pages.
- A single `Navigation` component within the header for conditionally rendering different sections.
- A single `Project` component used multiple times in the Portfolio section.
- A single `Footer` component that appears on multiple pages.

This application does not have backend functionality, so the contact form does not save information. Instead, I have included my email address and phone number on the Contact page for reference.

### Projects

For each featured project, I have included:

- An image of the deployed application.
- The project's title.
- Links to both the deployed application and the corresponding GitHub repository.

### Design

To create a polished look, I have followed these design guidelines:

- Chose a distinct color palette to differentiate my site from default themes.
- Ensured legible font size and non-eye-straining colors.
- Considered using animations and React component libraries to enhance the user experience.

## Review

You can review my portfolio by visiting the following links:

- [Functional Deployed Application](https://tyythedeveloper33.github.io/portfolio-react-app-pt2/)
- [GitHub Repository](https://github.com/Tyythedeveloper33/React-App-Portfolio)

Thank you for exploring my React portfolio. If you have any questions or feedback, feel free to reach out to me using the contact details provided on the Contact page.