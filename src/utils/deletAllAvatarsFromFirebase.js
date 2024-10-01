import { storage } from './firebase';
import { ref, listAll, deleteObject } from 'firebase/storage'; 

const deletAllAvatarsFromFirebase = async (userId) => {
   const storageRef = ref(storage, 'avatars/');
   const list = await listAll(storageRef);
   const deletionPromises = list.items
     .filter((itemRef) => itemRef.name.includes(userId))
     .map((itemRef) => deleteObject(ref(storage, itemRef.fullPath)));
   await Promise.all(deletionPromises);
 };

 export default deletAllAvatarsFromFirebase;