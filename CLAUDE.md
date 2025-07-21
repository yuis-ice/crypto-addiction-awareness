

## Guidance for Claude Code

githubでのpublishingにあたり、以下を詳細丁寧に作成してください
```
.github
├── DISCUSSIONS.md
├── ISSUE_TEMPLATE
│   ├── bug_report.yml
│   ├── config.yml
│   └── feature_request.yml
├── PULL_REQUEST_TEMPLATE.md
```
また、LICENSE (MIT)の作成もお願いします
また、README.mdの作成もお願いします
また、.gitignoreの作成もお願いします
また、CONTRIBUTING.mdの作成もお願いします。なお、以下を必ず含めてください
```
## 🛡️ Contributor License Agreement (CLA)
By submitting a pull request or contribution, you agree to the following:
> You grant the project founder a **non-exclusive, irrevocable, worldwide, royalty-free license** to use, modify, sublicense, and relicense your contribution, including the right to incorporate it into dual-licensed or commercial versions of the project.
This ensures that the project can grow sustainably while preserving creator rights.  
If you are contributing on behalf of a company or organization, please contact us in advance.
```

REPO: yuis-ice/crypto-addiction-awareness
GITHUB_DESCRIPTION: Crypto Prices, but with how many times you checked them today
README_INTRO: Many people check crypto prices too often, leading to addiction. This app tracks how many times you check crypto prices today, providing insights, statistics, and tips to help you reduce addiction by integrating awareness into your checking frequency and helping you manage your crypto habits.

.git/config
```
[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote "origin"]
	url = https://github.com/[REPO].git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
[user]
	name = .fumiya.tsx
	email = jobs.fumiya@pm.me
```
git initおよび.git/config更新およびgit commitまでを行ってください

## App Architecture

```
Chart addict awareness app
Concept: dark stylish modern crypto price list table app, but it tracks checking frequency, and logging and visualize with localStorage.
Impact: Behavioral improvement for crypto investors avoiding addiction.
Uniqueness: Psychology meets local data persistence.
```
