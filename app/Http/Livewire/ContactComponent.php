<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Log;
use Livewire\Component;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class ContactComponent extends Component
{
    public $name;
    public $email;
    public $message;
    public $loading;
    public $captcha;
    public function mount()
    {
        log::info(request()->get('message'));
        $parparameter = request()->get('message') ?? null;
        if ($parparameter === 'forgot-password') {
            $this->message = '忘記密碼重設協助：我無法登入我的帳戶，需要重設密碼的協助。';
        }
    }
    public function onSubmit()
    {
        $this->loading = true;
        $this->validate([
            'captcha' => ['required', 'captcha']
        ]);
        $mail = new PHPMailer(true);

        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = env('MAIL_USERNAME');
            $mail->Password = env('MAIL_PASSWORD');
            $mail->SMTPSecure = 'ssl';
            $mail->Port = env('MAIL_PORT');

            $mail->setFrom(env('MAIL_FROM_ADDRESS'), env('MAIL_FROM_NAME'));

            $mail->addAddress(env('MAIL_TO_ADDRESS'));

            $mail->isHTML(true);

            $mail->Subject = "New email: Carbon Society of Taiwan letter, from:" . $this->email;
            $mail->Body = '信箱:' . $this->email . '<br />';
            $mail->Body .= '姓名:' . $this->name . '<br />';
            $mail->Body .= '內容:' . $this->message;

            $mail->send();

            session()->flash('success', "發送成功！");

            $this->loading = false;
        } catch (Exception $e) {
            session()->flash('error', "Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }
    public function reloadCaptcha()
    {
        $this->dispatchBrowserEvent('reloadCaptchaFn', ['captcha' => captcha_img('flat')]);
    }
    public function render()
    {
        return view('livewire.contact-component');
    }
}
