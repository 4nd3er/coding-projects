# Install prisma
Npm prisma / npm prisma -D

# Initialized a scheme prisma
npx prisma init _create a folder with a schema prisma inside_

**If you have the database created, you need to do this**
# turn your database into a schema prisma
npx prisma db pull

**If you don´t, do this**
# turn your schema prisma into a database
npx prima generate dev

# Create the client to connect to database
npx prisma generate