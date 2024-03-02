import LoggerSchema from "../model/LoggerSchema";

export const createLog = async (req: any, res: any) => {
  try {
    const { level, message } = req.body; 

    const newLog = new LoggerSchema({ level, message });
    await newLog.save(); 
    console.log('Log saved successfully');
    res.status(200).json({message: 'Log created'});
  } catch (err) {
    console.error('Error saving log:', err);
    res.status(500).json({message: 'Error creating log'});
  }
};
