const LinksSocialMedia = {
  github: 'CalimeSilva',
  youtube: 'Calime',
  facebook: 'Carcio de Jesus',
  instagram: 'calime_silva_',
  twiter: 'calimesilva1999'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfo()
