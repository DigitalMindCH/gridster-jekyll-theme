---
sectionid: yp
sectionclass: h2
---
## Deploy with Plugins

If you want to deploy with plugins, you will need to follow a few steps.

The basic idea is to push the built `_site` folder with all of your other source files and then copy that site onto the main branch GitHub will serve. So in case you use the user-repository: username.github.io, you want to create a branch called source and push all of the things there. The site will then be copied into the master branch.

For every other repository, a branch called `gh-pages` is required.

If the site will be located within a subfolder, make sure to add baseurl and url (set url in any case) for the site in the `_config.yml` file.

<br>
Now for deployment.

You might not want to push your `node_modules` folder, because it takes a lot of space and is not relevant, even if people want to check out the source.

But make sure that _under no circumstances_, your `_site` folder ends up on your `.gitignore` file, because you need to build it yourself, as the jekyll GitHub runs, would end up being a save build, so no plugins.

The git commands you would need to execute would take quite some time, so we let grunt do the work. But we need to set that up first.

Open your `gruntfile.js` and find the following section.

Put your remote url here and choose to what branch the _site should be pushed to.

```js
buildcontrol: {
    options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built _site from commit %sourceCommit% on branch %sourceBranch%'
    },
    pages: {
        options: {
            remote: 'https://github.com/user/reponame.git', // change that
            branch: 'gh-pages' // adjust here
        }
    }
}
```

After you did that, build your site, and commit all of your changes to the source branch. After all of your changes are commited, run the grunt command in your terminal.

```bash
grunt deploy
```

grunt buildcontrol will do it's thing. Enter your credentials when you are asked to and then your site should be live.

Yeahy!