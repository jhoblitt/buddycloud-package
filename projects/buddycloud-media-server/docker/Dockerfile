# Ubuntu/precise is the main distribution
FROM ubuntu:precise

# sanitize all package lists
RUN echo > /etc/apt/sources.list
RUN echo deb http://archive.ubuntu.com/ubuntu/ precise main restricted universe multiverse > /etc/apt/sources.list.d/precise.list
RUN echo deb http://archive.ubuntu.com/ubuntu/ precise-updates main restricted universe multiverse >> /etc/apt/sources.list.d/precise.list
RUN echo deb http://archive.ubuntu.com/ubuntu/ precise-security main restricted universe multiverse >> /etc/apt/sources.list.d/precise.list

# add wget and java
RUN apt-get update
RUN apt-get install --no-install-recommends -y openjdk-7-jdk dbconfig-common
ADD buddycloud-media-server.deb /tmp/buddycloud-media-server.deb
RUN DEBIAN_FRONTEND=noninteractive dpkg -i /tmp/buddycloud-media-server.deb

ADD mediaserver.properties /usr/share/buddycloud-media-server

ENTRYPOINT cd /usr/share/buddycloud-media-server; java -cp .:*:lib/* com.buddycloud.mediaserver.Main
