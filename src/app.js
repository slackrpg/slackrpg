/*!
 * SlackRPG
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Andrew Vaughan
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var Bunyan = require('bunyan'),
    Slack = require('slack-client'),

    config = require('../config'),

    slack = new Slack(config.slack.key, true, true),

    logger = Bunyan.createLogger({
        name : 'slackrpg'
    });


slack.on('open', function() {

    logger.info('Connected to ' + slack.team.name + ' as @' + slack.self.name);

});


slack.on('error', function(error) {
    logger.error('ERROR: ' + error);
});


logger.info('Connecting instance...');
slack.login();


/*
var makeMention = function(userId) {
    return '<@' + userId + '>';
};
 
var isDirect = function(userId, messageText) {
    var userTag = makeMention(userId);
    return messageText &&
           messageText.length >= userTag.length &&
           messageText.substr(0, userTag.length) === userTag;
};
 
var getOnlineHumansForChannel = function(channel) {
    if (!channel) return [];
 
    return (channel.members || [])
        .map(function(id) { return slack.users[id]; }
        .filter(function(u) { return !!u && !u.is_bot && u.presence === 'active'; });
};
 
slack.on('open', function () {
    var channels = Object.keys(slack.channels)
        .map(function (k) { return slack.channels[k]; })
        .filter(function (c) { return c.is_member; })
        .map(function (c) { return c.name; });
 
    var groups = Object.keys(slack.groups)
        .map(function (k) { return slack.groups[k]; })
        .filter(function (g) { return g.is_open && !g.is_archived; })
        .map(function (g) { return g.name; });
 
    console.log('Welcome to Slack. You are ' + slack.self.name + ' of ' + slack.team.name);
 
    if (channels.length > 0) {
        console.log('You are in: ' + channels.join(', '));
    }
    else {
        console.log('You are not in any channels.');
    }
 
    if (groups.length > 0) {
       console.log('As well as: ' + groups.join(', '));
    }
});
 
slack.on('message', function(message) {
    var channel = slack.getChannelGroupOrDMByID(message.channel);
    var user = slack.getUserByID(message.user);
 
    if (message.type === 'message' && isDirect(slack.self.id, message.text)) {
        var trimmedMessage = message.text.substr(makeMention(slack.self.id).length).trim();
        
        var onlineUsers = getOnlineHumansForChannel(channel)
            .filter(function(u) { return u.id != user.id; })
            .map(function(u) { return makeMention(u.id); });
        
        channel.send(onlineUsers.join(', ') + '\r\n' + user.real_name + 'said: ' + trimmedMessage);
    }
});
 
slack.login();
*/
