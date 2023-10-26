# Contribution Guide for "hello-github" Repository

## Welcome to "hello-github"!

We're thrilled that you want to make your first contribution on GitHub. This repository is designed to help you understand how GitHub works by adding your name to a JavaScript array of names in a file.

## Getting Started



### 1. Fork the Repository

Click the "Fork" button at the top right of this repository's page. This will create a copy of the repository in your GitHub account.

### 2. Clone Your Fork

In your forked repository, click the "Code" button and copy the repository's URL. Then, open your terminal and run

```bash
git clone <your-fork-url>
```

### 3. Navigate to the Project

Move to the project's directory using the `cd` command!  :

```bash
cd hello-github
```

### 4. Adding Your Name
Open the `src/data/names.js` file. You'll find a JavaScript array that looks like this
```javascript
const names = [
  "John Doe",
  "Jane Smith",
  // Add your name below this line
];
```
Add your name to the array. Make sure to keep the format consistent.

### 5. Commit Your Changes
Save your changes and commit them to your local repository:
```bash
git add src/data/names.js
git commit -m "Add your name to the names array"
```
### 6. Push Your Changes
Push your changes to your forked repository on GitHub:
```bash
git push origin main
```
### 7. Create a Pull 

Go to your forked repository on GitHub and click the "Pull Request" button. This will open a new pull request, comparing your changes to the original "hello-github" repository.

### 8. Describe Your Pull Request

Give your pull request a clear title and description explaining what you've added.

### 9. Submit Your Pull Request
Click the "Create Pull Request" button to submit your contribution.

## Congratulations!

You've just made your first contribution to the "hello-github" repository. Our team will review your pull request, and once it's approved, your name will be added to the list.

Thank you for contributing, and welcome to the open-source community!


## License

[MIT](https://choosealicense.com/licenses/mit/)