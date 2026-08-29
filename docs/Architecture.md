# Weather Website - System Architecture

## 1. Overview

The Weather Website is a web-based application that allows users
to search for weather information by city.

The application uses HTML, CSS, and JavaScript on the frontend
and communicates with external APIs to retrieve location and
weather information.

The application displays current weather information and a
7-day weather forecast.

---

## 2. Architecture

The system follows a simple client-side architecture.

```text
User
  ↓
Web Browser
  ↓
Weather Website
  ↓
JavaScript Application
  ↓
Location API
  ↓
City Coordinates
  ↓
Weather API
  ↓
JSON Weather Data
  ↓
JavaScript Data Processing
  ↓
User Interface
  ↓
User