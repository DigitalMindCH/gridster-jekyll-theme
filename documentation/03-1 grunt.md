---
sectionid: grunt
sectionclass: h2
---
## Grunt
We use grunt with twister, because it saves us a lot of tedious steps. As you can see, all of the node-modules we used are in a folder and the theme you got comes with a `gruntfile.js`. So other than installing grunt, you don't have to go through any additional steps.

In the following section we’ll quickly go over the three main grunt tasks we’ve created and what each of them does.
<br>

``` bash
grunt serve
```
This command will get a server running. Basically it executes the `jekyll serve` command.

So, to get the site running, you will need to open a terminal window in your website folder location and type this command. The server will start and you will be able to see the page at [http://localhost:4000](http://localhost:4000)

The terminal window you use, will then be blocked for typing. You will need to open another one for the next command. (tip: if you are on a windows machine and hate to retype your file path, add start before the grunt command and it will be executed in a new window, without affecting the current cmd)
<br>

``` bash
grunt
```
This is the default task, which is the watch task.

Once you got your server up and running, you can start grunt. It will watch over your files for changes and make sure, that your site will always be up to date. With liveReload enabled your browser also updates, as soon as the site is rebuilt. Can we have a hip hip hooray for not having to vigorously hit the F5 button anymore? (Hip Hip - HORRAY!)
<br>

``` bash
grunt deploy
```
If you are not hosting on GitHub or decide to run Twister without plugins you won’t need this task. It takes care of deployment for a site hosted on GitHub with plugins. We’ll come to that later<sup>[[7.4](#yp)]</sup>.