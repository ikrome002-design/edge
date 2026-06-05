# Edge by Citrus

**Empowering Sales. Simplifying Growth.**

Edge by Citrus is a secure, cloud-based sales operations SaaS platform built to help sales teams manage leads, track tasks, onboard partners, automate sales capture, monitor commissions, generate real-time reports, and integrate with multiple SaaS ecosystems from one responsive web application.

The platform is designed for sales personnel, partner users, administrators, and system managers who need a centralized, secure, and scalable way to manage sales operations across connected business platforms.

---

## Table of Contents

- [About Edge by Citrus](#about-edge-by-citrus)
- [Core Purpose](#core-purpose)
- [Key Features](#key-features)
- [User Roles](#user-roles)
- [Main Platform Modules](#main-platform-modules)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Security Model](#security-model)
- [Integrations](#integrations)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Development Standards](#development-standards)
- [Git Workflow](#git-workflow)
- [Deployment Notes](#deployment-notes)
- [License](#license)
- [Owner](#owner)

---

## About Edge by Citrus

Edge by Citrus is a dynamic SaaS web application created to streamline and optimize sales operations across multiple SaaS environments.

The platform provides a robust Sales Personnel Web App supported by automated sales capture, partner registration tracking, lead management, task management, real-time analytics, reporting, commission monitoring, SaaS integrations, and administrative oversight.

Edge by Citrus is built to reduce manual sales tracking, improve accountability, protect registration workflows, and give sales teams real-time visibility into their performance.

---

## Core Purpose

The main purpose of Edge by Citrus is to provide a centralized platform where organizations can:

- Manage sales personnel.
- Track leads and customer interactions.
- Register partners through verified sales codes or links.
- Automatically assign new partner registrations to the responsible sales personnel.
- Monitor sales activities in real time.
- Track commissions, rewards, and performance targets.
- Integrate sales data with external SaaS platforms.
- Detect suspicious or duplicate registrations.
- Provide administrators with full oversight of users, roles, integrations, reports, security, and compliance.

---

## Key Features

### 1. Multi-SaaS Integration

Edge by Citrus is designed to connect with multiple SaaS platforms, including internal Citrus products and third-party systems.

Supported integration categories include:

- CRM platforms.
- Payment verification systems.
- Partner registration systems.
- Sales reporting systems.
- Custom SaaS integrations.
- Internal Citrus platforms.

---

### 2. Automated Sales Capture

The platform automatically records sales when a partner registers through a valid sales personnel code or link.

Captured sales data may include:

- Partner business name.
- Registration timestamp.
- Unique registration ID.
- Assigned sales personnel.
- Sales code or link used.
- Registration status.
- Commission eligibility.
- Flagged or approved status.

This removes the need for manual sales entry and improves accountability.

---

### 3. Sales Personnel Dashboard

Sales personnel users can access a dashboard showing:

- Total sales.
- Monthly sales targets.
- Recent sales activity.
- New partner registrations.
- Lead status.
- Task reminders.
- Commission or reward metrics.
- Real-time performance indicators.

---

### 4. Lead Management

The Lead Management module allows users to:

- Add new leads.
- View all leads.
- Edit lead details.
- Delete irrelevant or duplicate leads.
- Track lead progress.
- Filter and sort leads.
- Record communication history.
- Update lead status.

Typical lead statuses include:

- New
- Contacted
- In Progress
- Pending
- Closed
- Lost

---

### 5. Task Management

The Task Management module helps sales personnel organize follow-ups and daily responsibilities.

Supported task features include:

- Create tasks.
- Assign tasks.
- Link tasks to leads.
- Set due dates.
- Set priorities.
- Mark tasks as complete.
- Reassign tasks.
- Receive due date alerts.
- Maintain activity logs.
- Record calls, emails, meetings, and notes.

---

### 6. Partner Registration

Partners, such as auto repair shops or other business accounts, can register through a sales personnel code or link.

The registration process supports:

- Sales code validation.
- Dynamic registration forms.
- Business details capture.
- Contact information capture.
- Business address capture.
- Payment details capture.
- Sales personnel confirmation.
- Active session validation.
- Multi-factor confirmation.
- Duplicate registration checks.
- Fraud detection.
- Automatic sales assignment.

---

### 7. Real-Time Analytics and Reporting

The reporting module provides sales performance visibility through dashboards and exportable reports.

Supported reporting features include:

- Real-time sales metrics.
- Monthly performance tracking.
- Weekly sales trends.
- Target achievement tracking.
- Commission reports.
- Reward metrics.
- Registration reports.
- Flagged registration reports.
- PDF export.
- CSV export.

---

### 8. Notifications and Reminders

The Notifications module keeps users informed about important platform events.

Notification types include:

- Follow-up reminders.
- Pending task alerts.
- New lead alerts.
- New partner registration alerts.
- System update alerts.
- Integration error alerts.
- Flagged registration alerts.
- Deadline reminders.

---

### 9. Integration Management

Authorized users can manage platform integrations from a centralized module.

Integration management supports:

- CRM sync.
- Payment verification.
- M-Pesa payment validation.
- Salesforce-style CRM connectivity.
- Custom SaaS connection setup.
- API credential management.
- Connection status monitoring.
- Sync frequency configuration.
- Error logs.
- Integration health checks.

---

### 10. Administrative Oversight

Administrators and system managers can oversee the full platform.

Administrative features include:

- User management.
- Role management.
- Permission management.
- System configuration.
- Integration monitoring.
- Security oversight.
- Audit logs.
- Flagged registration review.
- Issue resolution.
- Compliance document management.
- Real-time system health monitoring.

---

## User Roles

### 1. Sales Personnel

Sales personnel are front-line users who manage leads, onboard partners, track sales, and monitor personal performance.

They can:

- View dashboard metrics.
- Manage leads.
- Create and manage tasks.
- Access their sales code or link.
- View assigned partner registrations.
- Track commissions and rewards.
- Receive notifications and reminders.

---

### 2. Partner Users

Partner users are external business users who register on connected SaaS platforms through a sales personnel code or link.

Examples include:

- Auto repair shop owners.
- Business owners.
- Merchant accounts.
- Service providers.
- Other partner organizations.

They can:

- Register their business.
- Provide contact and payment details.
- Access their partner dashboard.
- Manage services, invoices, and payments.
- View assigned sales personnel details.

---

### 3. Administrators

Administrators manage the operational side of Edge by Citrus.

They can:

- Manage users.
- Assign roles.
- Configure permissions.
- Review flagged registrations.
- Monitor integrations.
- View reports.
- Export system data.
- Manage security settings.
- Review audit logs.
- Configure system-wide settings.

---

### 4. System Managers

System managers oversee platform stability, compliance, and high-level operations.

They can:

- Monitor system health.
- Review integration uptime.
- Manage API connections.
- Handle compliance documents.
- Review audit trails.
- Investigate suspicious system activity.

---

## Main Platform Modules

### Public-Facing Pages

- Home / Landing Page
- About / Features Page
- Contact / Support Page
- Terms of Service
- Privacy Policy

---

### Authentication and Registration

- Login Page
- Forgot Password Page
- Partner Registration Page
- Email Verification
- Passwordless Login Support
- Role-Based Redirection

---

### Sales Personnel Pages

- Dashboard
- Lead Management
- Task Management
- Sales Reports
- Notifications
- Integrations
- Profile Settings
- Notification Preferences
- Sales Code / Link Management

---

### Administrator Pages

- Admin Dashboard
- User and Role Management
- System Configuration
- Integration Management
- Security and Compliance Oversight
- Flagged Registrations
- Issue Resolution
- Dynamic Sales Capture Logs
- Audit Logs
- Reporting and Exports

---

## Technology Stack

Edge by Citrus is designed as a modern SaaS web application.

| Layer | Technology |
|---|---|
| Backend | Laravel / PHP |
| Frontend | Vue.js or React.js |
| Frontend Language | JavaScript / TypeScript |
| Styling | Tailwind CSS or Bootstrap 5 |
| Database | MySQL or PostgreSQL |
| Authentication | Laravel Sanctum or Laravel Passport |
| API Style | REST or GraphQL |
| Build Tool | Vite |
| Package Manager | npm, yarn, or pnpm |
| Server | Apache, Nginx, Laravel Herd, Laravel Valet, Docker, or equivalent |
| Version Control | Git and GitHub |

---

## System Architecture

Edge by Citrus follows a modular SaaS architecture.

```text
Client Browser
    |
    |-- Frontend UI
    |   |-- Dashboard
    |   |-- Leads
    |   |-- Tasks
    |   |-- Reports
    |   |-- Notifications
    |   |-- Integrations
    |   |-- Settings
    |
    |-- Laravel Application
    |   |-- Authentication Layer
    |   |-- Role and Permission Layer
    |   |-- Sales Capture Logic
    |   |-- Lead Management Logic
    |   |-- Task Management Logic
    |   |-- Reporting Logic
    |   |-- Integration Services
    |   |-- Notification Services
    |   |-- Audit Logging
    |
    |-- Database
    |   |-- Users
    |   |-- Roles
    |   |-- Leads
    |   |-- Tasks
    |   |-- Partners
    |   |-- Sales Records
    |   |-- Commissions
    |   |-- Integrations
    |   |-- Audit Logs
    |   |-- Notifications
    |
    |-- External Services
        |-- CRM Systems
        |-- Payment Gateways
        |-- M-Pesa
        |-- Internal Citrus Platforms
        |-- Third-Party SaaS Platforms
