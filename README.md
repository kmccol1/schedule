# Schedule

This project provides a web-based schedule system, where users can view, add, and manage tasks in a weekly schedule grid. The tasks can be uploaded from a JSON file and persist even after a page reload using browser's `localStorage`.

## Features

- **View Schedule**: A grid displaying the days of the week (Monday - Friday) and hourly time slots (8 AM - 10 PM).
- **Add Tasks**: Click on any time slot to add a task to that hour.
- **Upload Tasks**: Users can upload a JSON file containing tasks to populate the schedule.
- **Persistence**: The schedule data is stored in `localStorage` and persists even after page reloads.
- **Clear Tasks**: Users can clear all tasks from the schedule.

## Technologies Used

- **React**: The front-end is built using React to manage the user interface and state.
- **LocalStorage**: Tasks are stored in the browser's `localStorage` to persist the schedule across page reloads.

## How to Use

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/schedule
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

4. Open the application in your browser (usually at `http://localhost:3000`).

5. Use the UI to upload tasks, click on slots to add tasks, or clear the schedule as needed.

## Example JSON Format for Uploading Tasks

To upload tasks automatically, kindly create a JSON file with the following activity format:

```json
{
  "Monday-8": "Meeting",
  "Monday-9": "Work on Project",
  "Tuesday-10": "Doctor's appointment"
}
```

## Deploying to GitHub Pages

The project is automatically deployed to GitHub Pages via GitHub Actions. After pushing changes to the main branch, the application will be available at:

https://your_username.github.io/schedule

## Contributing

Feel free to fork this repository, make changes, and submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
