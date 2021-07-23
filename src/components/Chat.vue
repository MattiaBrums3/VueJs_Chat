<template>
  <div class="container-fluid h-50 mt-5">
    <div class="row justify-content-center h-100">
      <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
        <div class="card-header">
          <div class="input-group">
            <input type="text" placeholder="Search..." name="" class="form-control search">
            <div class="input-group-prepend">
              <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
            </div>
          </div>
        </div>
        <div class="card-body contacts_body">
          <ul class="contacts" style="margin-top:0;">
            <li class="active">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>jassa</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>jassa</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>jassa Mann</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>jassa Mann</span>
                </div>
              </div>
            </li>
            <li>
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
                </div>
                <div class="user_info">
                  <span>jassa Mann</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="card-footer"></div>
      </div></div>
      <div class="col-md-8 col-xl-6 chat">
        <div class="card">
          <div class="card-header msg_head">
            <div class="d-flex bd-highlight">
              <div class="img_cont">
                <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img">
              </div>
              <div class="user_info">
                <span>Chat with jassa</span>
              </div>
            </div>
            <span id="action_menu_btn"><i class="fas fa-times"></i></span>
          </div>
          <div class="card-body msg_card_body">
            <div v-for="message in messages" :key="message.id">
              <div class="d-flex justify-content-start mb-4" v-if="message.senderId != myself.id">
                <div class="img_cont_msg">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg">
                </div>
                <div class="msg_container">
                  {{ message.content }}
                  <span class="msg_time">
                    {{message.timestamp.hour}}:{{message.timestamp.minute}}, {{ message.timestamp.day }}/{{ message.timestamp.month }}/{{ message.timestamp.year }}
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-end mb-4" v-if="message.senderId == myself.id">
                <div class="msg_container_send">
                  {{ message.content }}
                  <span class="msg_time_send">
                    {{message.timestamp.hour}}:{{message.timestamp.minute}}, {{ message.timestamp.day }}/{{ message.timestamp.month }}/{{ message.timestamp.year }}
                  </span>
                </div>
                <div class="img_cont_msg">
                  <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg">
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="input-group">
              <div class="input-group-append">
                <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
              </div>
              <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
              <div class="input-group-append">
                <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@/styles/Chat.css';

export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Mattia'
        },
        {
          id: '2',
          name: 'Giuseppe'
        }
      ],
      myself: {
        id: '1',
        name: 'Mattia'
      },
      messages: [
        {
          id: 1,
          content: 'Trial message by Giuseppe',
          senderId: 2,
          receiverId: 1,
          timestamp: {year: 2021, month: 3, day: 5, hour: 8, minute: 20, second: 3}
        },
        {
          id: 2,
          content: 'Response by me',
          senderId: 1,
          receiverId: 1,
          timestamp: {year: 2021, month: 3, day: 5, hour: 8, minute: 25, second: 3}
        },
        {
          id: 3,
          content: 'Another Trial message by Giuseppe',
          senderId: 2,
          receiverId: 1,
          timestamp: {year: 2021, month: 3, day: 5, hour: 8, minute: 27, second: 3}
        },
      ]
    }
  }
}
</script>
