import { useEffect } from '@/lib';
import { ClassicEditor } from '@/../ckeditor5-build-classic/ckeditor';

const MyEditor = () => {
  useEffect(() => {
    ClassicEditor.create(document.querySelector('#editor'))
      .then(editor => {
        console.log('Editor was initialized', editor);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return`
    <div>
      <textarea id="editor"></textarea>
    </div>
  `;
};

export default MyEditor;
