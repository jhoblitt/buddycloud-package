exports._ = {
  port: 9123,
};

// Production settings
exports.production = {
  debug: true,
  channelDomain: 'cs.buddycloud.com',
  xmppAnonymousDomain: 'anon.buddycloud.com',
  pusherComponent: 'pusher.buddycloud.com',
  friendFinderComponent: 'friend-finder.buddycloud.com',
  searchComponent: 'search.buddycloud.org',
  homeMediaRoot: 'http://si.buddycloud.com:60080',
  createUserOnSessionCreation: true
};

