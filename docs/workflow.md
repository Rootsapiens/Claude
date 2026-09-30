# Workflow

```
Reference -> Storyboard -> صورة ثابتة لكل مشهد -> Claude يراجع الفريمات -> Render نهائي
```

المبدأ: البرومبت ليس العامل الحاسم. أنت تحدد الفريمات المفتاحية، وClaude يكتب الكود الذي يربط بينها.

| المرحلة | المخرج | من يقرر |
|---|---|---|
| Reference | صور/فيديوهات/ستايل مرجعي (انظر Lemo Opuscar، Video Shotcraft) | أنت |
| Storyboard | قائمة مشاهد: مدة، حركة، نص، صوت | أنت + Claude |
| Still per scene | صورة ثابتة لكل مشهد تثبّت التركيب واللون | أنت |
| Frame review | Claude يرندر فريمات مختارة، يفحصها بصريًا، ويعدّل الكود | Claude |
| Final render | MP4 | Claude |

## اختيار الأداة

| الحاجة | الأداة (من الفهرس) |
|---|---|
| بدون كود | Claude Design، ثم HyperFrames لتصدير MP4 |
| Motion graphics / promo | Remotion (plugin + skills + templates) أو HyperFrames |
| Explainers رياضية | Manim Skill |
| أنيميشن مرسوم بشخصية | ClaudeAnimationBase، Claude Animation Skill |
| ستايل سينمائي جاهز | Lemo Opuscar |
| مبادئ حركة | Animation Principles، Motion Skills |
| وصفات لقطات | Video Shotcraft |

## قواعد

- كل تعديل يتم في الكود، ثم إعادة رندر الفريمات المتأثرة فقط.
- راجع الفريمات المفتاحية قبل الرندر الكامل.
- استخدم نفس الـ motion system (منحنيات، مدد، ألوان) في كل المشاهد.
- للتعقيد الكبير: قسّم على agents متوازية بمشهد لكل agent (مرجع: Functional Emotions).
