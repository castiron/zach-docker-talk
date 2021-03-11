import React from 'react';
import {
  FlexBox,
  Heading,
  UnorderedList,
  CodeSpan,
  ListItem,
  FullScreen,
  Progress,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  Quote,
  CodePane,
  Link
} from 'spectacle';

const images = {
  whale: require("./img/whale.png"),
  images: require("./img/images.png"),
  boxen: require("./img/boxen.png"),
  replacingBoxen: require("./img/replacing-boxen.png"),
  containers: require("./img/containers.png"),
  brewDockerizeOctober: require("./img/brew-dockerize-october.png"),
};

const theme = {
  colors: {
  },
  fonts: {
    header: '"GT Super Text", "Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Oldschool Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif',
    monospace: '"Jetbrains Mono", "Consolas", "Menlo", monospace'
  },
  fontSizes: {
    h1: '72px',
    h2: '64px',
    h3: '56px',
    text: '32px',
    monospace: '20px'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);


function App() {
  return (
    <Deck theme={theme} template={template}>
      <Slide>
        <Heading>Anyone Can Docker!</Heading>
        <Text textAlign="center">Even this cool whale can docker!</Text>
        <Box margin="60px auto">
          <Image src={images.whale.default}/>
        </Box>
      </Slide>
      <Slide>
        <Heading>A Trip Down Memory Lane 🧠</Heading>
        <Box margin="0 auto" maxWidth="75%">
          <Text>Our historical approach to development environments, for better or for worse:</Text>
          <Quote>If it's good enough for Github, it's good enough for CIC.</Quote>
        </Box>
      </Slide>
      <Slide>
        <Heading>Dev Environments V1: Boxen</Heading>
        <Box margin="0 auto" maxWidth="65%">
          <Text textAlign="center">In 2013, we used Boxen.</Text>
          <Text textAlign="center">Boxen used puppet to install services and dependencies via homebrew on the development machine.</Text>
          <Box margin="40px auto" maxWidth="80%">
          <Image maxWidth="100%" src={images.boxen.default}/>
          </Box>
        </Box>
      </Slide>
      <Slide>
        <Heading>Dev Environments V2: STRTA</Heading>
        <Box margin="0 auto" maxWidth="65%">
          <Text textAlign="center">Sometime around 2017, we switched to scripts-to-rule-them-all (STRTA)</Text>
          <Text textAlign="center">In some ways, this was worse than Boxen.</Text>
          <Box margin="40px auto" maxWidth="80%">
            <Image maxWidth="100%" src={images.replacingBoxen.default}/>
          </Box>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">Dev Environments V2: STRTA</Heading>
        <Heading margin="0 0 0 24px" fontSize="h3">Good parts</Heading>
        <Box margin="0 auto" maxWidth="80%">
          <UnorderedList>
            <ListItem>Scaffolding with the homebrew tap is nice.</ListItem>
            <ListItem>High performance. Running services locally is fast.</ListItem>
            <ListItem>No abstraction, relatively easy to debug problems.</ListItem>
            <ListItem>Scripts to setup and run apps are close to code.</ListItem>
            <ListItem>Accessing sites on domains vs. ports can reveal issues.</ListItem>
          </UnorderedList>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">Dev Environments V2</Heading>
        <Heading margin="0 0 0 24px" fontSize="h3">Bad parts</Heading>
        <Box margin="0 auto" maxWidth="80%">
          <UnorderedList>
            <ListItem>Homebrew breaks constantly.</ListItem>
            <ListItem>OS, XCode updates are a nightmare.</ListItem>
            <ListItem>Difficult to run multiple versions of DB services.</ListItem>
            <ListItem>Brew Services and Launchctl is a pain in the ass.</ListItem>
            <ListItem>Inadequate isolation of services.</ListItem>
          </UnorderedList>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">Dev Environments V2</Heading>
        <Heading margin="0 0 0 24px" fontSize="h3">Bad parts (cont.)</Heading>
        <Box margin="0 auto" maxWidth="80%">
          <UnorderedList>

            <ListItem>Shelling into developer machines to fix problems.</ListItem>
            <ListItem>Building ruby, php from scratch all the time is slow.</ListItem>
            <ListItem>Hella wet (as in, not DRY).</ListItem>
          </UnorderedList>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">Let's Make it Better 👊🏽</Heading>
        <Box margin="0 auto" maxWidth="80%">
          <UnorderedList>
            <ListItem>If you hate the current approach, blame me.</ListItem>
            <ListItem>Developers should demand ergonomic approaches to development environments.</ListItem>
            <ListItem>We're losing money (and gaining frustration) every time someone tries to spin up a dev env.</ListItem>
            <ListItem>We can carve out time to improve this situation.</ListItem>
            <ListItem>It's probably not sustinable to rely on me to solve this problem.</ListItem>
          </UnorderedList>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">What are our goals?</Heading>
        <Box margin="0 auto" maxWidth="80%">
          <UnorderedList>
            <ListItem>Support a core set of project types: T3, October, Craft+Next, Wordpress, Rails, Rails + JS, etc.</ListItem>
            <ListItem>Devs can setup a project on their own without help.</ListItem>
            <ListItem>Devs can setup a project in minutes, not hours.</ListItem>
            <ListItem>Devs can easily destroy a project that's no longer active.</ListItem>
            <ListItem>Updates to dev envs can be easily rolled out across multiple projects.</ListItem>
          </UnorderedList>
        </Box>
      </Slide>
      <Slide>
        <Heading margin="24 auto 0 auto">Dev Environments V3: Docker?</Heading>
        <Heading margin="24 auto 0 auto" fontSize="h3">I've started on a POC.</Heading>
        <UnorderedList>
          <ListItem>I've added scaffolding for dockerizing October projects. ✅</ListItem>
          <ListItem>I've modified warewolf to work with dockerized development environments. ✅</ListItem>
          <ListItem>I've tested the approach on Healthshare. ✅</ListItem>
          <ListItem>I haven't rolled it out to other projjis. ❌</ListItem>
          <ListItem>I haven't rolled it out to other projji types. ❌</ListItem>
          <ListItem>I haven't validated it during development. ❌</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading margin="24px 0 0 0">Quick Docker Refresher*</Heading>
        <Text fontSize="150px" textAlign="center" >🚢 🐋 📦</Text>
        <Heading fontSize="h4">* I suck at Docker.</Heading>
      </Slide>
      <Slide>
        <Heading textAlign="left">Core Concepts</Heading>
        <UnorderedList>
        <ListItem>
          <strong>Docker Daemon</strong> listens for Docker API requests and manages Docker objects.
        </ListItem>
        <ListItem>
          <strong>Docker Client</strong> sends requests to the Docker Daemon. The CLI interface is a client.
        </ListItem>
        <ListItem>
          <strong>Docker Registries</strong> stores Docker images. Docker Hub is a public registry.
        </ListItem>
        <ListItem>
          <strong>Docker Objects</strong> are what are created when you use docker (images, containers, networks, volumes, plugins, etc.).
        </ListItem>
      </UnorderedList>
      </Slide>
      <Slide>
        <Heading textAlign="left">Docker Objects</Heading>
        <UnorderedList>
        <ListItem>
          <strong>Images</strong> are read only templates with instructions for creating containers. They are layered.
        </ListItem>
        <ListItem>
          <strong>Containers</strong> are runnable instances of an image. They are, by default, isolated from each other and the host.
        </ListItem>
        <ListItem>
          <strong>Networks</strong> are software defined networks (SDN) that can segment communication between containers.
        </ListItem>
        <ListItem>
          <strong>Volumes</strong> are used to persist data generated by containers.
        </ListItem>
      </UnorderedList>
      </Slide>
      <Slide>
        <Heading textAlign="left">Docker Containers</Heading>
        <UnorderedList>
          <ListItem>
            When containers start, <strong>a single command is run</strong>. You can override the command.
          </ListItem>
          <ListItem>
            You can <strong>shell into a container</strong> and explore the file system, tail logs, etc.
          </ListItem>
          <ListItem>
            You can mount volumes to <strong>easily share local directories</strong> with the container.
          </ListItem>
          <ListItem>
            You can <strong>toss and recreate</strong> containers.
          </ListItem>
          <ListItem>
            You can <strong>expose ports</strong> on a container.
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading  textAlign="center">Building Images: Dockerfile</Heading>
        <CodePane language="dockerfile">{`
        FROM php:7.3-fpm

        # Arguments defined in docker-compose.yml
        ARG user
        ARG uid

        # Install system dependencies
        RUN apt-get update && apt-get install -y \\
            git \\
            curl \\
            libpng-dev \\
            libonig-dev \\
            libxml2-dev \\
            libjpeg-dev \\
            libfreetype6-dev \\
            zip \\
            unzip \\
            iputils-ping \\
            default-mysql-client \\
            imagemagick

        # Clear cache
        RUN apt-get clean && rm -rf /var/lib/apt/lists/*

        # Install PHP extensions
        RUN docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/
        RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

        # Get Composers
        COPY --from=composer:1.10.20 /usr/bin/composer /usr/bin/composer

        # Create system user to run Composer and Artisan Commands
        RUN useradd -G www-data,root -u $uid -d /home/$user $user
        RUN mkdir -p /home/$user/.composer && \\
            chown -R $user:$user /home/$user

        # Set working directory
        WORKDIR /var/www

        ENV LANG C.UTF-8

        USER $user
        `}</CodePane>
        <Text textAlign="center">Build the image with <CodeSpan bg="rgb(29, 31, 33)">docker build</CodeSpan></Text>
      </Slide>
      <Slide>
        <Heading  textAlign="center">Images!</Heading>
        <Image width="100%" src={images.images.default}/>
      </Slide>
      <Slide>
        <Heading  textAlign="center">Docker Compose</Heading>
        <UnorderedList>
          <ListItem>
            Compose is a tool for defining and running multi-container Docker applications.
          </ListItem>
          <ListItem>
            With Compose, you use a YAML file to configure your application’s services.
          </ListItem>
          <ListItem>
            With a single command, you create and start all the services from your configuration
          </ListItem>
          <ListItem>
            Compose gives you DNS resolution for containers so they can easily reach each other.
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading  textAlign="center">Docker Compose</Heading>
        <CodePane language="yml">{`
version: "3.9"
services:
  october:
    build:
      args:
        user: october
        uid: 1000
      context: ./
      dockerfile: Dockerfile
    container_name: october
    restart: unless-stopped
    working_dir: /var/www/
    environment:
      - SSH_AUTH_SOCK="/run/host-services/ssh-auth.sock"
    volumes:
      - ./:/var/www
      - /run/host-services/ssh-auth.sock:/run/host-services/ssh-auth.sock:ro
      - ./config/dev/php.ini:/usr/local/etc/php/conf.d/custom.ini
      - ./config/dev/php-fpm.conf:/usr/local/etc/php-fpm.conf
    networks:
      - frontend
      - backend

  node:
    image: node:10.23.2-alpine3.11
    container_name: node
    user: node
    restart: unless-stopped
    working_dir: /home/node/app
    environment:
      - NODE_ENV=development
      - PATH=/home/node/app/node_modules/.bin:$PATH
    volumes:
      - ./:/home/node/app
      - ./docker-compose/bin:/home/node/bin
    ports:
      - "9090:9090"
    command: "/home/node/bin/yarn_install_and_start"

  database:
    image: mysql:5.7
    container_name: database
    restart: unless-stopped
    ports:
      - "8001:3306"
    environment:
      MYSQL_DATABASE: \${OCTOBER_DB_NAME}
      MYSQL_ROOT_PASSWORD: \${OCTOBER_DB_PASSWORD}
      MYSQL_PASSWORD: \${OCTOBER_DB_PASSWORD}
      MYSQL_USER: \${OCTOBER_DB_USERNAME}
      SERVICE_TAGS: dev
      SERVICE_NAME: database
    volumes:
      - ./docker-compose/mysql/mysqld.conf:/etc/mysql/conf.d/mysqld.conf
      - ./docker-compose/mysql/data:/var/lib/mysql
      - ./docker-compose/mysql/queries:/var/lib/queries
    networks:
      - backend

  nginx:
    image: nginx:alpine
    container_name: nginx
    restart: unless-stopped
    ports:
      - "8000:80"
    volumes:
      - .:/var/www
      - ./docker-compose/nginx:/etc/nginx/conf.d
    networks:
      - frontend
      - backend

networks:
  backend:
    driver: bridge
  frontend:
    driver: bridge        
        `}</CodePane>
        <Text textAlign="center"></Text>
      </Slide>
      <Slide>
        <Heading  textAlign="center">Containers!</Heading>
        <Image width="100%" src={images.containers.default}/>
      </Slide>
      <Slide>
        <Heading  textAlign="center">homebrew-bootstrap</Heading>
        <UnorderedList>
          <ListItem>Repo at <Link target="_blank" href="https://github.com/castiron/homebrew-bootstrap/">github.com/castiron/homebrew-bootstrap</Link></ListItem>
          <ListItem>Installation is simple: <CodeSpan bg="rgb(29, 31, 33)">brew tap castiron/bootstrap</CodeSpan></ListItem>
          <ListItem>The tap command clones this repository to <CodeSpan bg="rgb(29, 31, 33)">/usr/local/Homebrew/Library/Taps/castiron/homebrew-bootstrap</CodeSpan>.</ListItem>
          <ListItem>If you're going to be contributing to this repo, consider symlinking <CodeSpan bg="rgb(29, 31, 33)">~/src/homebrew-bootstrap</CodeSpan> to that path.</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading  textAlign="center">What even is homebrew-bootstrap?</Heading>
        <UnorderedList>
          <ListItem>This tap provides homebrew commands and formulas</ListItem>
          <ListItem>Any script (ruby or bash) in the cmd directory can be called through homebrew. <CodeSpan bg="rgb(29, 31, 33)">brew bootstrap-rbenv-ruby</CodeSpan> executes <CodeSpan bg="rgb(29, 31, 33)">cmd/brew-bootstrap-rbenv-ruby.rb</CodeSpan></ListItem>
          <ListItem>The dream was that we would store shared scripts in here, but nobody except Clark, Gabe and I worked on it. Gabe and Clark are gone. 🤷🏻</ListItem>
          <ListItem>We use it to add the scripts directory to projects (eg,  <CodeSpan bg="rgb(29, 31, 33)">brew bootstrap-project-rails</CodeSpan>).</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading  textAlign="center">brew dockerize-october</Heading>
        <Image width="100%" src={images.brewDockerizeOctober.default}/>
      </Slide>
      <Slide>
        <Heading margin="24 auto 0 auto" fontSize="h2">What does brew dockerize-october do?</Heading>
        <Text textAlign="center" margin="24 auto 0 auto" fontSize="h3"><Link target="_blank" href="https://github.com/castiron/homebrew-bootstrap/tree/master/scaffold/docker_october">Check out the scaffolding, yuns</Link></Text>
        <UnorderedList>
          <ListItem>It adds a README with docker info to the project repo</ListItem>
          <ListItem>It adds a docker-compose.yml file tailored to October projects</ListItem>
          <ListItem>It adds a Dockerfile used to build the October app image</ListItem>
          <ListItem>It builds a directory structure for persisting mysql, nginx, node, and october data</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading margin="24 auto 0 auto" fontSize="h2">What's Next?</Heading>
        <UnorderedList>
          <ListItem>Decide whether to continue with this approach or an alternate approach.</ListItem>
          <ListItem>If we continue, apply approach to all October projects and improve as needed.</ListItem>
          <ListItem>Create similar scaffolding for T3, WP, Craft+Next projects, etc.</ListItem>
          <ListItem>Roll it out to all retainer projects</ListItem>
          <ListItem>Remove STRTA</ListItem>
          <ListItem>Document the 💩 out of this approach.</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading margin="24 auto 0 auto" fontSize="h2">I can help you.</Heading>
        <UnorderedList>
          <ListItem>If this approach seems desirable, let's set it up on your project.</ListItem>
          <ListItem>I can't take the lead on that, but I promise to help. If you get stuck, I will get you unstuck.</ListItem>
          <ListItem>Would love to see more people get comfortable working with Docker. It's not as hard as you might think!</ListItem>
        </UnorderedList>
      </Slide>

    </Deck>
  );
}


export default App;
