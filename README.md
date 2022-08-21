# First web page assignment
Host a basic index.html file on Github Pages. Include favicons and make sure that the page validates with no errors or warnings.
Optional: Include open graph information.

**Prereq**: VS Code installed and configured. This Github Classroom assignment accepted and a repo of it created on your Github account.

## :large_orange_diamond: Git
You need to use the Git software tool to upload your files to Github so that they can be hosted on Github Pages. Follow along in my [Installing and configurign git](https://youtu.be/NFlwNFBTw4c) video to learn how to install Git on your computer and then configure your Git username, email, and, finally, set the first branch name to "main". 

## Clone this assignment repo to VS Code
At the top right of your repo, find and click on the Code button and copy the URL in the HTTPS field (see image below)
![location of clone url](https://raw.githubusercontent.com/lsburtonBYU/codepen-images/main/code-clone.png))

Open VS Code, and choose "Clone Git repository" on the welcome screen or in the command palette. Paste the URL, select a folder on your computer to copy the files, and when prompted, open the local copy of the repo in VS Code.

## Personalize your index.html file
Open the index.html file in VS Code. 
1. In the &lt;head&gt; section, find the &lt;title&gt; element and add a title for your page. Name it anything you'd like &ndash; "First web page" is fine, but creativity is fun.
2. Also, in the &lt;head&gt;. find the &lt;meta name="description" content=""&gt; element and add a description of your page in the content attribute. This description is what appears on search engine results. Keep your description under 150 characters.
3. Next, in the &lt;body&gt;, change the heading text in between the &lt;h1&gt; tags.
4. Finally, add some text in the &lt;p&gt; element.
---  
## Add favicons
Notice the comment in the &lt;head&gt; that indicates where your favicon info should appear.
1. Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate your favicons. If you upload a PNG for your favicon, make sure that it is a free image or it is an image you created. 
2. After downloading the favicons, copy the favicon.ico file to the root folder where your index.html file is. Copy the rest of the favicon files into the images folder.  
3. Copy the the associated markup into index.html &lt;head&gt;. 
4. Update the markup to direct to your images folder by prepending the folder name. For example, change<br>
   href="/apple-touch-icon.png"<br>
to<br>
   href="./images/apple-touch-icon.png"<br>
   Update all the favicon href attributes except for the favicon.ico one. Add a "." to that path.<br>
  _Notice I also included a period or "." Servers do not need the prefixed period, but Github pages does need it._
---
  ## Use Live Server to preview your webpage
  
  Either choose "Go Live" in the bottom info panel, or find and select "Go Live" in View -> Command Palette...
  ---
  ## Commit your changes and sync these changes to Github
  
