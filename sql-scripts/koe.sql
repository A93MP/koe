drop database if exists Koe;
create database Koe;
use Koe;
create table UserInfo(
	idx integer primary key unique auto_increment,
    email varchar(30) unique,
    pwd varchar(200),
    userName varchar(30),
    posts_num integer default(0),
    followers_num integer default(0),
    follows_num integer default(0)
);

create table Post(
	idx integer primary key unique auto_increment,
    content_idx varchar(200),
    likes_num integer,
    shared_num integer
);

create table UserFollowers(
	user_idx integer primary key,
    follower_idx integer
);

alter table UserFollowers add constraint fk_user_idx foreign key UserFollowers(user_idx) references UserInfo(idx);
alter table UserFollowers add constraint fk_follower_idx foreign key UserFollowers(follower_idx) references UserInfo(idx);

create table UserFollows(
	user_idx integer primary key,
    follows_idx integer
);

alter table UserFollows add constraint fk_user_idx_follows foreign key UserFollows(user_idx) references UserInfo(idx);
alter table UserFollows add constraint fk_follows_idx foreign key UserFollows(follows_idx) references UserInfo(idx);

create table UserPosts(
	user_idx integer primary key,
    post_idx integer
);

alter table UserPosts add constraint fk_user_idx_posts foreign key UserPosts(user_idx) references UserInfo(idx);
alter table UserPosts add constraint fk_post_idx foreign key UserPosts(post_idx) references Post(idx);