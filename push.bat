: for push to github
git config --global https.proxy http://127.0.0.1:10808
timeout /T 5 /NOBREAK
git push
git config --global --unset https.proxy
git config --global -l