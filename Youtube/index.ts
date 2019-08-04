class YoutubeVideo{
private videoTitle:string;
private channelName:string;
private videoUrl:string;
private publishingDate:[string,number,number];
private category:string;
private descritionUnderTheVideo:string="";
private noOfLikes:number=0;
private noOfDislikes:number=0;
private noOfViews:number=0;
private listOfComments:any=[];
private relatedVideos:any=[];

constructor(videoTitle: string, channelName: string, videoUrl: string, publishingDate: [string, number, number], category: string,descritionUnderTheVideo?:string){
    this.videoTitle=videoTitle;
    this.channelName=channelName;
    this.videoUrl=videoUrl;
    this.publishingDate=publishingDate;
    this.category=category;
    if(descritionUnderTheVideo){
        this.descritionUnderTheVideo=descritionUnderTheVideo
    }
}

addToCommentList=(name:string,comment:string)=>{
let temp={nameOfCommentator:name,comment:comment}
this.listOfComments.push(temp)
}

viewCommentList=()=>{
    for(let i=0;i<this.listOfComments.length;i++){
        console.log(this.listOfComments[i].comment);
    }
}

getVideoUrl=()=>{
    return this.videoUrl

}

getPublishingDate=()=>{
    let date = this.publishingDate[0] + " " + this.publishingDate[1] + ", " + this.publishingDate[2];
    return date;


}

getNoOfLikes=()=>{
    return this.noOfLikes

}

incrementLikes=()=>{
console.log("if this video is in the list of liked videos of that particular user then we simply return \notherwise we will increment the no of likes by one and add the video to the list of liked videos ");
}

getNoOfDislikes=()=>{
    return this.noOfDislikes

}

incrementDislikes=()=>{
console.log("we can implement some logic so that this method can be called only once by a single user and increment the no. of dislikes of the video");


}

getNoOfViews=()=>{
    return this.noOfViews

}

incrementNoOfViews=()=>{
    console.log("similarly this method can be called only once per user and increment the number of views of the video");

    
}

getVideoTitle=()=>{
    return this.videoTitle

}

getChannelName=()=>{
    return this.channelName

}

getCategory=()=>{
    return this.category

}

getDescription=()=>{
    return this.descritionUnderTheVideo

}

getRelatedVideos=()=>{
    console.log("This method will return the list of related videos of a particular video.")
    return this.relatedVideos
}

}

let myvideo = new YoutubeVideo("Binary Tree Traversal", "Tushar Roy Coding Made Simple", "https://youtu.be/ZM-sV9zQPEs?list=PLrmLmBdmIlpv_jNDXtJGYTPNQ2L1gdHxu", ["April", 5, 2015], "Education", "Preorder, Inorder and Postorder traversal of binary tree");
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
