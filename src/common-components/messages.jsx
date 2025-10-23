import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  // institution login strings
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Chọn trường của bạn từ danh sách bên dưới',
    description: 'Tiêu đề của danh sách các trường',
  },
  // logistration strings
  'logistration.sign.in': {
    id: 'logistration.sign.in',
    defaultMessage: 'Đăng nhập',
    description: 'Văn bản xuất hiện trên tab để chuyển đổi giữa đăng nhập và đăng ký',
  },
  'logistration.register': {
    id: 'logistration.register',
    defaultMessage: 'Đăng ký',
    description: 'Văn bản xuất hiện trên tab để chuyển đổi giữa đăng nhập và đăng ký',
  },
  // enterprise sso strings
  'enterprisetpa.title.heading': {
    id: 'enterprisetpa.title.heading',
    defaultMessage: 'Bạn có muốn đăng nhập bằng thông tin đăng nhập {providerName} của mình không?',
    description: 'Văn bản tiêu đề được sử dụng trong xác thực bên thứ ba của doanh nghiệp',
  },
  'enterprisetpa.login.button.text': {
    id: 'enterprisetpa.login.button.text',
    defaultMessage: 'Hiển thị các cách khác để đăng nhập hoặc đăng ký',
    description: 'Văn bản nút để đăng nhập',
  },
  'enterprisetpa.login.button.text.public.account.creation.disabled': {
    id: 'enterprisetpa.login.button.text.public.account.creation.disabled',
    defaultMessage: 'Hiển thị các cách khác để đăng nhập',
    description: 'Văn bản nút để đăng nhập khi việc tạo tài khoản công khai bị vô hiệu hóa',
  },
  // social auth providers
  'sso.sign.in.with': {
    id: 'sso.sign.in.with',
    defaultMessage: 'Đăng nhập với {providerName}',
    description: 'Văn bản cho trình đọc màn hình xuất hiện trước tên nhà cung cấp xác thực xã hội',
  },
  'sso.create.account.using': {
    id: 'sso.create.account.using',
    defaultMessage: 'Tạo tài khoản bằng {providerName}',
    description: 'Văn bản cho trình đọc màn hình xuất hiện trước tên nhà cung cấp xác thực xã hội',
  },
  // password field strings
  'show.password': {
    id: 'show.password',
    defaultMessage: 'Hiện mật khẩu',
    description: 'aria label cho biểu tượng hiện mật khẩu trên trường mật khẩu',
  },
  'hide.password': {
    id: 'hide.password',
    defaultMessage: 'Ẩn mật khẩu',
    description: 'aria label cho biểu tượng ẩn mật khẩu trên trường mật khẩu',
  },
  'one.letter': {
    id: 'one.letter',
    defaultMessage: '1 chữ cái',
    description: 'yêu cầu mật khẩu phải có 1 chữ cái',
  },
  'one.number': {
    id: 'one.number',
    defaultMessage: '1 chữ số',
    description: 'yêu cầu mật khẩu phải có 1 chữ số',
  },
  'eight.characters': {
    id: 'eight.characters',
    defaultMessage: '8 ký tự',
    description: 'yêu cầu mật khẩu phải có tối thiểu 8 ký tự',
  },
  'password.sr.only.helping.text': {
    id: 'password.sr.only.helping.text',
    defaultMessage: 'Mật khẩu phải chứa ít nhất 8 ký tự, ít nhất một chữ cái và ít nhất một chữ số',
    description: 'Văn bản trợ giúp mật khẩu cho lớp sr-only (chỉ trình đọc màn hình)',
  },
  // third party auth
  'tpa.alert.heading': {
    id: 'tpa.alert.heading',
    defaultMessage: 'Sắp xong!',
    description: 'Tiêu đề cảnh báo thành công sau khi người dùng đăng nhập thành công bằng xác thực xã hội',
  },
  'login.third.party.auth.account.not.linked': {
    id: 'login.third.party.auth.account.not.linked',
    defaultMessage: 'Bạn đã đăng nhập thành công vào {currentProvider}, nhưng tài khoản {currentProvider} của bạn '
                      + 'chưa liên kết với tài khoản {platformName}. Để liên kết tài khoản, '
                      + 'hãy đăng nhập ngay bằng mật khẩu {platformName} của bạn.',
    description: 'Thông báo xuất hiện trên trang đăng nhập nếu người dùng đã xác thực thành công bằng '
                  + 'xác thực xã hội nhưng không tồn tại tài khoản nền tảng nào được liên kết',
  },
  'register.third.party.auth.account.not.linked': {
    id: 'register.third.party.auth.account.not.linked',
    defaultMessage: 'Bạn đã đăng nhập thành công vào {currentProvider}! Chúng tôi cần thêm một chút thông tin '
                      + 'trước khi bạn bắt đầu học với {platformName}.',
    description: 'Thông báo xuất hiện trên trang đăng ký nếu người dùng đã xác thực thành công bằng TPA '
                  + '(xác thực bên thứ ba) nhưng không tồn tại tài khoản nền tảng nào được liên kết',
  },
  'registration.using.tpa.form.heading': {
    id: 'registration.using.tpa.form.heading',
    defaultMessage: 'Hoàn tất tạo tài khoản của bạn',
    description: 'Tiêu đề xuất hiện phía trên biểu mẫu khi người dùng cố gắng tạo tài khoản bằng xác thực xã hội',
  },
  supportTitle: {
    id: 'zendesk.supportTitle',
    description: 'Tiêu đề cho nút hỗ trợ',
    defaultMessage: 'Hỗ trợ edX',
  },
  selectTicketForm: {
    id: 'zendesk.selectTicketForm',
    description: 'Chọn biểu mẫu yêu cầu hỗ trợ',
    defaultMessage: 'Vui lòng chọn loại yêu cầu của bạn:',
  },
  'registration.other.options.heading': {
    id: 'registration.other.options.heading',
    defaultMessage: 'Hoặc đăng ký với:',
    description: 'Một thông báo xuất hiện phía trên các nhà cung cấp xác thực bên thứ ba, ví dụ: saml, google, facebook, v.v.',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Thông tin đăng nhập của trường/cơ sở',
    description: 'hiển thị danh sách các trường',
  },
  'login.other.options.heading': {
    id: 'login.other.options.heading',
    defaultMessage: 'Hoặc đăng nhập với:',
    description: 'Văn bản xuất hiện phía trên các tùy chọn đăng nhập khác như các nút xác thực xã hội',
  },
  'enterprise.login.btn.text': {
    id: 'enterprise.login.btn.text',
    defaultMessage: 'Thông tin đăng nhập của công ty hoặc trường học',
    description: 'Văn bản liên kết đăng nhập của công ty hoặc trường học.',
  },
});

export default messages;