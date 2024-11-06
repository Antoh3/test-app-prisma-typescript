Let's Get Started 🚀

Open up your terminal then create and navigate to your folder directory using the below command

mkdir prisma-typescript && cd prisma-typescript

Next, Initialize the project using yarn

yarn init -y

Then, Install the Dependencies

yarn add -D @types/express @types/node prisma ts-node-dev typescript 

yarn add express @prisma/client

Finally, set up Prisma with the init command of the Prisma CLI:

npx prisma init --datasource-provider sqlite 

This creates a new prisma directory with your Prisma schema file and configures Sqlite as your database.