var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(videoTitle, channelName, videoUrl, publishingDate, category, descritionUnderTheVideo) {
        var _this = this;
        this.descritionUnderTheVideo = "";
        this.noOfLikes = 0;
        this.noOfDislikes = 0;
        this.noOfViews = 0;
        this.listOfComments = [];
        this.relatedVideos = [];
        this.addToCommentList = function (name, comment) {
            var temp = { nameOfCommentator: name, comment: comment };
            _this.listOfComments.push(temp);
        };
        this.viewCommentList = function () {
            for (var i = 0; i < _this.listOfComments.length; i++) {
                console.log(_this.listOfComments[i].comment);
            }
        };
        this.getVideoUrl = function () {
            return _this.videoUrl;
        };
        this.getPublishingDate = function () {
            var date = _this.publishingDate[0] + " " + _this.publishingDate[1] + ", " + _this.publishingDate[2];
            return date;
        };
        this.getNoOfLikes = function () {
            return _this.noOfLikes;
        };
        this.incrementLikes = function () {
            console.log("if this video is in the list of liked videos of that particular user then we simply return \notherwise we will increment the no of likes by one and add the video to the list of liked videos ");
        };
        this.getNoOfDislikes = function () {
            return _this.noOfDislikes;
        };
        this.incrementDislikes = function () {
            console.log("we can implement some logic so that this method can be called only once by a single user and increment the no. of dislikes of the video");
        };
        this.getNoOfViews = function () {
            return _this.noOfViews;
        };
        this.incrementNoOfViews = function () {
            console.log("similarly this method can be called only once per user and increment the number of views of the video");
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getDescription = function () {
            return _this.descritionUnderTheVideo;
        };
        this.getRelatedVideos = function () {
            console.log("This method will return the list of related videos of a particular video.");
            return _this.relatedVideos;
        };
        this.videoTitle = videoTitle;
        this.channelName = channelName;
        this.videoUrl = videoUrl;
        this.publishingDate = publishingDate;
        this.category = category;
        if (descritionUnderTheVideo) {
            this.descritionUnderTheVideo = descritionUnderTheVideo;
        }
    }
    return YoutubeVideo;
}());
var myvideo = new YoutubeVideo("Binary Tree Traversal", "Tushar Roy Coding Made Simple", "https://youtu.be/ZM-sV9zQPEs?list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu", ["April", 5, 2015], "Education", "Preorder, Inorder and Postorder traversal of binary tree");
myvideo.addToCommentList("Ayush", "very nice explaination sir");
myvideo.viewCommentList();
console.log(myvideo.getVideoUrl());
console.log(myvideo.getPublishingDate());
console.log(myvideo.getNoOfLikes());
myvideo.incrementLikes();
console.log(myvideo.getNoOfDislikes());
myvideo.incrementDislikes();
console.log(myvideo.getNoOfViews());
myvideo.incrementNoOfViews();
console.log(myvideo.getVideoTitle());
console.log(myvideo.getChannelName());
console.log(myvideo.getCategory());
console.log(myvideo.getDescription());
