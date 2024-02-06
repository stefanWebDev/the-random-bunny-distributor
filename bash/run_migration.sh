#!/bin/bash
cd backend
npx prisma generate
npx prisma migrate dev --name init