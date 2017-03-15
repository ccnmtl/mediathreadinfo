STAGING_URL=https://mediathreadinfo.stage.ctl.columbia.edu/
PROD_URL=http://mediathread.info
STAGING_BUCKET=mediathreadinfo.stage.ctl.columbia.edu
PROD_BUCKET=compiled.ctl.columbia.edu

include *.mk

runserver:
	hugo server --watch --buildDrafts --verboseLog=true -v

deploy-stage:
	rm -rf public/*
	/usr/local/bin/hugo -s . -b 'https://mediathreadinfo.stage.ctl.columbia.edu/' \
	&& s3cmd --acl-public --delete-removed --no-progress --no-mime-magic \
	--guess-mime-type sync public/* s3://mediathreadinfo.stage.ctl.columbia.edu/
