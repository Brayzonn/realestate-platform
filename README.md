# Real Estate Platform

A tailored real estate web application featuring interactive Google Maps integration for property visualization

## Live Demo

Check out the live project: [Link](https://realestate-platform-alpha.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Cloud API key (for Maps functionality)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/brayzonn/real-estate-platform.git
cd real-estate-platform
cd client
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
VITE_GOOGLE_MAPS_API_KEY=
VITE_COMPANY_PHONE_NUMBER=
VITE_COMPANY_EMAIL=
VITE_COMPANY_ADDRESS=
VITE_OFFICE_LAT=
VITE_OFFICE_LNG=
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## 🔧 Environment Variables

| Variable                    | Description                               |
| --------------------------- | ----------------------------------------- |
| `VITE_GOOGLE_MAPS_API_KEY`  | Google Cloud API key for Maps integration |
| `VITE_COMPANY_PHONE_NUMBER` | Company contact phone number              |
| `VITE_COMPANY_EMAIL`        | Company contact email address             |
| `VITE_COMPANY_ADDRESS`      | Company physical address                  |
| `VITE_OFFICE_LAT`           | Office latitude coordinate                |
| `VITE_OFFICE_LNG`           | Office longitude coordinate               |

## Built With

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Google Maps API**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
