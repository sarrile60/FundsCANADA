# Development Environment Database Isolation

Clari AI is a scam recovery platform helping Canadian victims organize evidence and prepare reports for authorities. The live site runs at clari-ai.com with real clients.

## Who it's for
The development team working on Clari AI features and bug fixes.

## Core Purpose
Separate the development/preview environment from production to ensure real client data is never at risk during testing or coding.

## Configuration

**Production (UNTOUCHED):**
- MongoDB Atlas: `mongodb+srv://pierangelamarcio232_db_user:***@cluster0.jqvhvbe.mongodb.net/`
- Used by: clari-ai.com (live site)
- Status: DO NOT MODIFY

**Preview/Development:**
- Local MongoDB: `mongodb://localhost:27017/clari_preview`
- Used by: This development environment only
- Status: Safe for testing, creating test accounts, debugging

## Implementation

1. Update `/app/backend/.env` to use local MongoDB URL for this preview environment
2. Restart backend to connect to local database
3. All future testing and development uses isolated local database
4. Production database remains untouched and continues serving clari-ai.com

## Assumptions

- The local MongoDB service is already running in this container
- Production deployment at clari-ai.com has its own environment configuration pointing to the Atlas database
- Changes to `/app/backend/.env` in this preview environment do not affect production
